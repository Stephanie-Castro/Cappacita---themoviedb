export class InserirApiRateModel {
    constructor(api_rated_type: string, url_accessed: string, guest_session_id: string | null, movie_id: number | undefined, rate: number, api_status_returned: string
        ) {
        this.api_rated_type = api_rated_type;
        this.url_accessed = url_accessed;
        this.guest_session_id = guest_session_id;
        this.movie_id = movie_id;
        this.rate = rate;
        this.api_status_returned = api_status_returned;
      }

    api_rated_type: string;
    url_accessed: string;
    guest_session_id: string | null;
    movie_id: number | undefined;
    rate: number;
    api_status_returned: string;

}
