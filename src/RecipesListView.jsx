/**
 * Created by Вітя on 23.07.2016.
 */

import View from './View.js';
import Recipe from './Recipe.js'

class RecipesLіstView extends View{
    constructor(){
        super();

        this.name = 'RecipesLіstView';

        this.state = {
            data: []
        }

        this.getRecipesData();
    }


    getRecipesData(){
        $.ajax({
            url: "http://localhost:80/recipes.php"
        }).done(result => {
            this.state = {
                data: JSON.parse(result)
            };

            this.forceUpdate();
        });
    }

    render(){
        return(
            <div className="RecipesList">
                {this.state.data.map((rec, i) => <Recipe data={rec} key={i}/>)}
            </div>
        );
    }
}

export default RecipesLіstView;