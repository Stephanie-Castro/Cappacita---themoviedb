const {databaseConnection} = require('./connection')


const cappacita_tmdb = [];

async function insertInfoApi(api_info) {
    const insertInfo = {
        api_used_type: api_info.api_used_type,
        url_accessed: api_info.url_accessed,
        amount_itens_api_returned: api_info.amount_itens_api_returned,
        api_status_returned: api_info.api_status_returned
    };

    const result = await databaseConnection('general_info_api_tmdb_usage').insert(insertInfo)

    if(result){
        return {
            api_used_type: api_info.api_used_type,
            url_accessed: api_info.url_accessed,
            amount_itens_api_returned: api_info.amount_itens_api_returned,
            api_status_returned: api_info.api_status_returned,
            id: result[0]
        };
    } else{
        console.error("Deu erro!");
        return {
            error: "Deu erro na inserção"
        };
    }

}

async function getInfoApiById(id) {

    const result = await databaseConnection('general_info_api_tmdb_usage').where({id: id});
    return result[0];
}

async function getAllInfoApi() {

    const result = await databaseConnection('general_info_api_tmdb_usage');

    return result;
}


async function deleteInfoApi(id) {

    const result = await databaseConnection('general_info_api_tmdb_usage').where({id: id}).del();
    return result[0];

}




async function insertInfoRateApi(api_rate_info) {
    const insertInfo = {
        api_rated_type: api_rate_info.api_rated_type,
        url_accessed: api_rate_info.url_accessed,
        guest_session_id: api_rate_info.guest_session_id,
        movie_id: api_rate_info.movie_id,
        rate: api_rate_info.rate,
        api_status_returned: api_rate_info.api_status_returned
    };

    const result = await databaseConnection('guest_session_rate').insert(insertInfo)

    if(result){
        return {
            api_rated_type: api_rate_info.api_rated_type,
            url_accessed: api_rate_info.url_accessed,
            guest_session_id: api_rate_info.guest_session_id,
            movie_id: api_rate_info.movie_id,
            rate: api_rate_info.rate,
            api_status_returned: api_rate_info.api_status_returned,
            id: result[0]
        };
    } else{
        console.error("Deu erro!");
        return {
            error: "Deu erro na inserção"
        };
    }

}

async function updateInfoRateApi(id, updateRateInfoApi) {

    const updateRateApi = {
        rate: updateRateInfoApi.rate,
    };

    const result = await databaseConnection('guest_session_rate').where({ id: id }).update(updateRateApi)

    if(result){
        return {
            rate: updateRateInfoApi.rate,
            id: id
        };
    } else{
        console.error("Deu erro!");
        return {
            error: "Deu erro na atualização"
        };
    }
}


async function checkIfGuestAlrealdyRatedMovie(api_rated_type, movie_id, guest_session_id) {

    const result = await databaseConnection('guest_session_rate').where({api_rated_type: api_rated_type, movie_id: movie_id, guest_session_id: guest_session_id});
    return result[0];
}




module.exports = { insertInfoApi, getInfoApiById, getAllInfoApi, deleteInfoApi, insertInfoRateApi, updateInfoRateApi, checkIfGuestAlrealdyRatedMovie}