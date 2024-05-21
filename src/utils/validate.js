export const validateData = (city, zip) =>{
    const isCityValid = /^[a-zA-Z\s]+$/.test(city)
    const isZipValid = /^(?!0{3})\d{5}(?:-?\d{4})?$/.test(zip);

    if(!isCityValid) return "City is not valid";
    if(!isZipValid) return "Zip is not valid";

    return null;
}

export const uniqId = () => 'id' + (new Date()).getTime();