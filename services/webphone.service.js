const axios = require('axios')

class service {

    async makeCall(payload) {
        const { cellno } = payload;
        const api = 'https://3frontoffice.nr.tre.se/api/call/control/v1/make/3kontaktpartnernr.dk/a23995751/10.3rd_party_phone';
        console.log(api);

        const token = '19654.VDo1ZDYwNTdmNzNjY2I5Mjdl';
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            "destination": `tel:${cellno}`
        }

        const sbc = axios.post(
            api,
            bodyParameters,
            config
        ).then().catch();
    }

}

module.exports = new service();