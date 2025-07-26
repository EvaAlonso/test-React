

export const getImagen = async() => {

    try {

        const apiKey = 'JsLp8WwqLKLNRSvRrKDV1ZIXSDpdWn31';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontró la imágen';
    }
    
    
    
}

 getImagen();



