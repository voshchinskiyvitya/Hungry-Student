/**
 * Created by User on 15.08.2016.
 */
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);

        if(!!props.views){
            this.views = props.views;
            this.currentView = this.views[0];
        } else {
            throw Error("View for app wasn't defined.");
        }
    }

    switchToView(viewIndex){
        let view = this.views[viewIndex];
        if(!!view){
            this.currentView.close();
            this.currentView = view;
            this.currentView.open();

            this.forceUpdate();
        } else {
            throw Error("View [" + viewIndex + "] does not find.");
        }
    }
}

export default App;