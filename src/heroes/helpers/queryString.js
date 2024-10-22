const queryString = {
    parse: (url) => {
        const query = {};
        const params = url.split("?")[1];
        params && params.split("&").forEach(element => {
            const entries = element.split("=");
            query[entries[0]] = entries[1];
        });    
        return {
            ...query
        }
    }
}

export default queryString;

