const generateRandomId = ( min , max ) => {

    let randomId = Math.random() * (max-min)+min;
    return parseInt(randomId); 

}

const baseUrl = "https://gmail.googleapis.com";
const token = "";

const getEmailList= async({request}) => {
    const response1 = await request.get(baseUrl+"/gmail/v1/users/me/messages",{

        headers: {
            "Accept":"application/json",
            "Authorization":"Bearer "+token
        }


    })
    const data = await response1.json();
    const emailID = data.messages[0].id;
    console.log("Email ID fetched:", emailID);
    return emailID;

}

const getEmailRead = async ({ request }) => {
    const emailID = await getEmailList({ request }); 
    const response2 = await request.get(baseUrl + "/gmail/v1/users/me/messages/" + emailID, {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    const resJson = await response2.json();
    const mailBody = resJson.snippet;
    console.log("Email body:", mailBody);
    return mailBody;
};



export {generateRandomId};
export { getEmailList, getEmailRead };
