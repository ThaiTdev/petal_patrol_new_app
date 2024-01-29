// Class pour construire la card LogBook

export class CardLogBook {
    constructor( dateToAdd, subtitle, descriptionText, imagePlant) {
        this.dateToAdd = dateToAdd;
        this.subtitle = subtitle;
        this.descriptionText = descriptionText;
        this.imagePlant = imagePlant;
    }
    dateToAdd = null;
    subtitle = null;
    descriptionText = null;
    imagePlant = null;
}