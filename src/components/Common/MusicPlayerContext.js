'use client';
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
    const [audio, setAudio] = useState(null);
    const [trackQueue, setTrackQueue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const currentTrackIndexRef = useRef(0);
    const audioRef = useRef(null);

    const playNextTrack = useCallback(() => {
        currentTrackIndexRef.current += 1;
        if (currentTrackIndexRef.current < trackQueue.length) {
            const newAudio = new Audio(trackQueue[currentTrackIndexRef.current]);
            setAudio(newAudio);
            newAudio.play();
        } else {
            setAudio(null);
        }
    }, [trackQueue]);

    useEffect(() => {
        if (audio) {
            audioRef.current = audio;
            audio.addEventListener('ended', playNextTrack);
            return () => audio.removeEventListener('ended', playNextTrack);
        }
    }, [audio, playNextTrack]);

    const playMusic = useCallback(async () => {
        if (!audio && trackQueue.length > 0) {
            const newAudio = new Audio(trackQueue[currentTrackIndexRef.current]);
            setAudio(newAudio);
            newAudio.play();
        } else if (!audio && trackQueue.length === 0) {
            setIsLoading(true);
            const tracks = await fetchPlaylistDetails();
            setTrackQueue(tracks);
            setIsLoading(false);
            if (tracks.length > 0) {
                const audio = new Audio(tracks[currentTrackIndexRef.current]);
                setAudio(audio);
                await audio.play();
            }
        } else if (audio) {
            audio.pause();
            setAudio(null);
        }
    }, [audio, trackQueue]);

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
            return shuffleArray(data.data[0].relationships.tracks.data.map(track => track.attributes.previews[0].url));
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    // Context value
    const value = {
        playMusic,
        isLoading,
        trackQueue,
        setTrackQueue,
        audio
    };

    return (
        <MusicPlayerContext.Provider value={value}>
            {children}
        </MusicPlayerContext.Provider>
    );
};
