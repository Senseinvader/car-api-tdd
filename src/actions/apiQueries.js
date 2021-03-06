import {API_KEY} from "../non-export-data/api-key";

export const getBodiesQuery = `https://api.mercedes-benz.com/configurator_tryout/v1/markets/de_DE/bodies?apikey=${API_KEY}`;
export const getModelsQuery = (bodyId) => {
    return `https://api.mercedes-benz.com/configurator_tryout/v1/markets/de_DE/models?bodyId=${bodyId}&apikey=${API_KEY}`;
};

export const getModelConfigurationQuery = (modelId) => {
    return `https://api.mercedes-benz.com/configurator_tryout/v1/markets/de_DE/models/${modelId}/configurations/initial?apikey=${API_KEY}`
};