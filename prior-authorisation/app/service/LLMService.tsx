import { preAuthResponse } from "./preAuthResponse"

export const getLLMPreAuthorisation = async () => {
    //Make API call
    //Pretend we received an OK response
    // try {
    //     //const response = await fetch('preAuthResponse.json');
    //     console.log(response);
    //     if (!response.ok) {
    //         throw new Error('Failed to get pre authorisation response');
    //     }

    //     return response.json();
    // } catch (error) {
    //     console.log(error);
    //     throw new Error("Uh oh");
    // }

    return preAuthResponse;
}