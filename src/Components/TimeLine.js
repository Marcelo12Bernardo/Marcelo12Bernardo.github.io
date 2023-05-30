import React from "react";

class TimeLine extends React.Component{
    render(){
        return(
            <section class="mt-48">
                <div class="bg-primary flex w-full h-3 items-center gap-44">
                    <div class="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div class="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                    </div>

                    <div class="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div class="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                    </div>

                    <div class="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div class="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                    </div>

                    <div class="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div class="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                    </div>
                </div>
                <div class="flex w-full items-center gap-9 mt-6">
                    <section class="w-44">
                    <h1 className="text-primary font-bold ">2018</h1>
                    <p className="text-secondary mt-1">Inicio de onde tudo começou</p>
                    </section>
                </div>
            </section>
        );
    }
}
export  default TimeLine;