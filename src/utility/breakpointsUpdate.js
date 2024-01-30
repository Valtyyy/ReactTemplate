
export const breakpoints = [2560, 1920, 1350, 975, 768, 425]

//prend le breakpoints le plus haut pour le format => si width = 1000 alors breakpoints = 1350

/** 
    1920(brkpts) <----- width      1350(brkpts)
*/

export const BreakpointsUpdate = (width) => {
    
    width = width-1;

    if(width > breakpoints[0]){
        return breakpoints[0]
    }

    if(width < breakpoints[breakpoints.length-1]){
        return breakpoints[breakpoints.length-1]
    }

    for(var i = 0; i < breakpoints.length; i++){
        if(!!breakpoints[i+1]){
            if(width <= breakpoints[i] && width >= breakpoints[i+1]){
                return breakpoints[i]
            }
        }
    }
}