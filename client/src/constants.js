export const qvgaConstraints = {
    audio: true,
    video: {
        mandatory: {
            maxWidth: 320,
            maxHeight: 180
        }
    }
};

export const vgaConstraints = {
    audio: true,
    video: {
        mandatory: {
            maxWidth: 640,
            maxHeight: 360
        }
    }
};

export const hdConstraints = {
    audio: true,
    video: {
        mandatory: {
            minWidth: 1280,
            minHeight: 720
        }
    }
};
