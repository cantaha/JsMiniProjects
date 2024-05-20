class moneyProject {
    constructor(name, surName, cardIsTrue, ingredients) {
        this.name = name
        this.surName = surName
        this.cardIsTrue = cardIsTrue
        this.ingredients = ingredients
    }
    saleRate = 20;
    

    calc() {
        let payMoney = 0

        if (this.control(this.ingredients)) {
            if (this.cardIsTrue) {
                this.ingredients.forEach(element => {
                    payMoney += (element.price*(100-this.saleRate)/100)
                });
            }
            else {
                this.ingredients.forEach(element => {
                    payMoney += element.price
                });
            }
        }

        else{
            showAlert("warning", "Please enter ingredients"); 
        }
        return payMoney;
        }

    control(ingredients) {
        if (ingredients != null && ingredients.length > 0) {
            return true
        } else {
            return false
        }
    }
}