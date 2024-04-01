import React, { useState, useEffect, useRef } from 'react';
import CapsuleButton from './CapsuleButton';

const MusicPlayer = () => {
    const [trackQueue, setTrackQueue] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(-1); // No track selected initially
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio();
        const fetchPlaylistDetails = async () => {
            setIsLoading(true);
            try {
                const playlistId = 'pl.u-b3bM3L4hyljR5po';
                const response = await fetch(`https://api.music.apple.com/v1/catalog/gb/playlists/${playlistId}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MUSIC_TOKEN}`,
                    },
                });
                if (!response.ok) throw new Error('Network response was not ok.');
                const data = await response.json();
                const urls = data.data[0].relationships.tracks.data.map(track => track.attributes.previews[0].url);
                setTrackQueue(urls);
                setIsLoading(false);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setIsLoading(false);
            }
        };

        fetchPlaylistDetails();
    }, []);

    useEffect(() => {
        // Handler to play next track when the current one ends
        const playNextTrack = () => {
            let nextIndex = currentTrackIndex + 1;
            if (nextIndex < trackQueue.length) {
                setCurrentTrackIndex(nextIndex);
            } else {
                setCurrentTrackIndex(-1); // Reset to no track
            }
        };

        const audio = audioRef.current;
        audio.addEventListener('ended', playNextTrack);
        return () => audio.removeEventListener('ended', playNextTrack);
    }, [currentTrackIndex, trackQueue]);

    useEffect(() => {
        // Play the track whenever currentTrackIndex changes
        if (currentTrackIndex >= 0 && currentTrackIndex < trackQueue.length) {
            const trackUrl = trackQueue[currentTrackIndex];
            audioRef.current.src = trackUrl;
            audioRef.current.play().catch(error => console.error('Error playing track:', error));
        }
    }, [currentTrackIndex, trackQueue]);

    const playMusic = () => {
        if (currentTrackIndex < 0 && trackQueue.length > 0) {
            console.log(1)
            setCurrentTrackIndex(0); // Start playing from the first track
        } else if (audioRef.current.paused) {
            console.log(2)
            audioRef.current.play();
        } else {
            console.log(3)
            audioRef.current.pause();
        }
    };

    return (
        <CapsuleButton
            icon={isLoading ? "fa-spinner" : currentTrackIndex >= 0 ? "fa-pause" : "fa-headphones"}
            iconCallback={!isLoading ? playMusic : undefined}
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
