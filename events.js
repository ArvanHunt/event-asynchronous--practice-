                                            
                                            **** E V E N T S ****  
                                                                                           
Change in the state of an object

interesting changes that effect code execution

    *   INLINE EVENT HANDLING   //------in HTML
            <button onclick="console.log('button was clicked');alert('hello!')">click me!</button>

    *   EVENT HANDLING IN JAVA SCRIPT  //-----IN JS
            node.event = () => {
                //handle here
            }

                ex : let btn1 = document.querySelector("#btn1");
                        btn1.onclick = () => {
                            console.log("btn1 was clicked");
                            let a = 25;
                            a++;
                            console.log(a);
                        }

                ex2 : let box = document.querySelector("div");
                        box.onmouseover = () => {
                            console.log("you are inside a box");
                        }

    NOTE : IF BOTH HTML AND JS EVENT HANDLING then JS EVENT HANDLING WORKS
            IF BOTH SAME EVENT HANDLING ON SAME DIV ---- LATEST EVENT HANDLING WORKS [IT WILL OVERRIGHT]

    * EVENT Object   //----- it has details about the events AND have access to the Event Object's properties and methods 
            node.event = (e) => {    //----- here e represents 1.target 2.type 3.clientX 4.clientY
                handle here
            }

                ex : let btn1 = document.querySelector("#btn1");
                    btn1.onclick =(e) => {
                        console.log(e); 
                        console.log(e.type);
                    }
            note : e can be written as e , evt , event

    *   EVENT LISTNER 
            node.addEventListner(event,callback)            //call back is the function  
            node.removeEventListner(event,callback)         //when the event occurs the function is works 

                            //callback is the function ---- it will go as argument in other functions 
                            //callback are the event handlers

                    *   ADD EVENT LISTNER
                            let btn1 = document.querySelector("#btn1");
                                btn1.addEventListener("click", () => {
                                    console.log("button was clicked");
                                })

                                btn1.addEventListener("click", () => {
                                    console.log("button was clicked-2nd time");    //----we can use as much we want
                                })

                                btn1.addEventListener("click", (e) => {
                                    console.log("button was clicked");
                                    console.log(e);
                                    console.log(e.type);
                                })

                    *   REMOVE EVENT LISTNER
                            //here we have 4 button handlers
                            //now we want to remove tha handler3
                            
                            let btn1 = document.querySelector("#btn1");
                                btn1.addEventListener("click", () => {
                                    console.log("button was clicked-handler1");
                                })

                                btn1.addEventListener("click", () => {
                                    console.log("button was clicked-handler2");    
                                }) 

                                const handler3 = () => {
                                //btn1.addEventListener("click", () => {
                                    console.log("button was clicked-handler3");    
                                }

                                btn1.addEventListener("click", () => {
                                    console.log("button was clicked-handler4");    
                                })

                        //here using removeEventListner
                                btn1.removeEventListener("click",handler3);