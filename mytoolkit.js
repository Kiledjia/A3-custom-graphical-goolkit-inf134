// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        
        var rect = draw.rect(100,50).fill('#6699cc')

        var text = draw.text('Button')
        .font({size: 20, family: 'Helvetica'});
        
        var clickEvent = null
        rect.mouseover(function(){
            this.fill({ color: '#808080'})
            console.log("mouseover Change state")
        })
        rect.mouseout(function(){
            this.fill({ color: '#6699cc'})
            console.log("mouseout Change state")
        })
        rect.mouseup(function(){
            this.fill({ color: '#6699cc'})
            console.log("mouseup Change state")
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
                text.move(x+21,y+12);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
    
    
return {Button}
}());

export{MyToolkit}