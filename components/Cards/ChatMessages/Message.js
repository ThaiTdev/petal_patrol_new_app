// Class pour construire la card

export class Message {
    constructor(message, sendAt, user, imageProfil){
        this.message = message;
        this.sendAt = sendAt;
        this.user = user;
        this.imageProfil= imageProfil;
    }
    message = null;
    sendAt = null;
    user = null;
    imageProfil = null;
}
