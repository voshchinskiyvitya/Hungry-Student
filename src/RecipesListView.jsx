/**
 * Created by Вітя on 23.07.2016.
 */

import React from 'react';
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
            url: "http://fisherman.if.ua/recipes.php"
        }).done(result => {
            this.state = {
                data: JSON.parse(result)
            };

            this.forceUpdate();
        });
    }

    component(){
        return component;
    }

    render(){
        return(
            <div className="RecipesList">
                {this.state.data.map((rec, i) => <Recipe data={rec} key={i}/>)}
            </div>
        );
    }
}

var component = (<RecipesListView />);

export default RecipesLіstView;