export class InserirApiModel {
    constructor(api_used_type: string, url_accessed: string, amount_itens_api_returned: number | undefined, api_status_returned: string
        ) {
        this.api_used_type = api_used_type;
        this.url_accessed = url_accessed;
        this.amount_itens_api_returned = amount_itens_api_returned;
        this.api_status_returned = api_status_returned;
      }

    api_used_type: string;
    url_accessed: string;
    amount_itens_api_returned: number | undefined;
    api_status_returned: string;

}
