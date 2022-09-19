const log = console.log;
const controllerService = require('../services/webphone.service');
const moment = require(`moment`);
const joi = require('joi');

class controller {

    async makeCall(payload) {
        try {
            const schema = joi.object().keys({
                device: joi.string().optional(),
                password: joi.string().optional(),
                cellno: joi.string().required()

            });

            const notValid = schema.validate(payload).error;

            if (notValid) {
                log(`make call error : ${notValid.message}`);
                return {
                    success: false,
                    message: notValid.message
                }
            }

            const data = await controllerService.makeCall(payload);
            if (data) {
                return data;
            }
            return { success: false, message: 'call failed', data: null };
        } catch (error) {
            log(error);
            return { success: false, message: error.message, data: null };
        }
    }

}




module.exports = new controller();