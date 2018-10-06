const coverWidth = 289;
const coverHeight = 163;
export const getImageUrlFromTemplate = (url, width, height) => {
    return url.replace(
        '{?width,height}',
        `?width=${width || coverWidth}&height=${height || coverHeight}`
    );
};
