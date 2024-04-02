import React from 'react';
import { useMusicPlayer } from './MusicPlayerContext';
import CapsuleButton from './CapsuleButton';

const MusicPlayerButton = () => {
    const { playMusic, isLoading, audio } = useMusicPlayer();

    return (
        <CapsuleButton
            text="Play/Pause"
            icon={isLoading ? "fa-spinner" : audio ? "fa-pause" : "fa-headphones"}
            iconCallback={!isLoading ? playMusic : undefined}
            iconActive={audio !== null}
            rightMargin
            small
            disabled={isLoading}
        />
    );
};

export default MusicPlayerButton;
