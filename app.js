const axios = require('axios');
const convert = require('xml-js');
const parser = require('xml2json');



var url = 'http://192.168.1.215'
const instance = axios.create({
    baseURL: url + '/GetDeviceInfo',
    headers: { 'Authorization': 'Basic YWRtaW46cGljY3R2MDY1Mg==' },
    //  auth: {
    ///    username: 'admin',
    // password: 'picctv0652'
    //}
});
var xml;
const colors = require('colors')
instance.post()
    .then((resp) => {
        xml = resp.data;
        var a = convert.xml2json(xml, { compact: false });
        var b = parser.toJson(xml, options = {
            object: true
        });
        var lp = b.config.deviceInfo.supportAPILongPolling.$t;
        var name = b.config.deviceInfo.deviceName.$t;
        var model = b.config.deviceInfo.model.$t;
        var version = b.config.deviceInfo.softwareVersion.$t;
        var mac = b.config.deviceInfo.mac.$t;
        var json = parser.toJson(xml);
        //console.log(b);
        console.log(colors.green(`conexion exitosa a ${url}\n`), colors.cyan('Device Info'), '\nnombre:', name, '\nverison:', version, '\nmodelo:', model, '\nmac:', mac, '\nlonhgpolling:', lp);
    }).catch((err) => {
        console.log('!!!ERROR!!!!', err);
    });