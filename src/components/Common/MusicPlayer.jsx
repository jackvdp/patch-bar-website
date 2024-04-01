import React, { useState, useEffect, useRef } from 'react';
import CapsuleButton from './CapsuleButton';

const MusicPlayer = () => {
    const [audio, setAudio] = useState(null);
    const [trackQueue, setTrackQueue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const currentTrackIndexRef = useRef(0);
    const audioRef = useRef(null);

    const fetchPlaylistDetails = async () => {
        const playlistId = 'pl.u-b3bM3L4hyljR5po';
        const url = `https://api.music.apple.com/v1/catalog/gb/playlists/${playlistId}`;
        try {

            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MUSIC_TOKEN}`,
                },
            });
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            return data.data[0].relationships.tracks.data.map(track => track.attributes.previews[0].url);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const playNextTrack = () => {
        currentTrackIndexRef.current += 1;
        if (currentTrackIndexRef.current < trackQueue.length) {
            const audio = new Audio(trackQueue[currentTrackIndexRef.current]);
            setAudio(audio);
            audio.play();
        } else {
            setAudio(null);
        }
    };

    useEffect(() => {
        if (audio) {
            audioRef.current = audio;
            const endListener = () => {
                playNextTrack();
            };
            audio.addEventListener('ended', endListener);
            return () => audio.removeEventListener('ended', endListener);
        }
    }, [audio, trackQueue]);

    const playMusic = async () => {
        if (!audio && trackQueue.length > 0) {
            const audio = new Audio(trackQueue[currentTrackIndexRef.current]);
            setAudio(audio);
            audio.play();
        } else if (!audio && trackQueue.length === 0) {
            setIsLoading(true)
            const tracks = await fetchPlaylistDetails();
            setIsLoading(false)
            setTrackQueue(shuffleArray(tracks));
            if (tracks.length > 0) {
                const audio = new Audio(tracks[currentTrackIndexRef.current]);
                setAudio(audio);
                audio.play();
            }
        } else if (audio) {
            audio.pause();
            setAudio(null);
        }
    };

    return (
        <CapsuleButton
            icon={isLoading ? "fa-spinner" : audio ? "fa-pause" : "fa-play"}
            iconCallback={!isLoading ? playMusic : undefined}
            iconActive={audio !== null}
            rightMargin
            small
            disabled={isLoading}
        />
    );
};

export default MusicPlayer;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
