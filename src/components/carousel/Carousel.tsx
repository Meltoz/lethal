import React, {Component, ReactNode, Children} from 'react';
import "./Carousel.css"

interface CarouselProps {
    children: ReactNode;
    showButtons: boolean;
    showDots: boolean;
    // autoplay, timer, infinite...
}

interface CarouselState {
    index: number;
}


class Carousel extends Component<CarouselProps, CarouselState> {

    private totalItems: number = 0;

    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            index: 0,
        };
        this.totalItems = Children.count(this.props.children);
    }

    increment = () => {
        const newIndex =  this.canIncrement() ? 0 : this.state.index+1;
        this.setState({index: newIndex});
    }

    decrement = () =>{
        let newIndex = 0;
        if(this.totalItems === 0){
            newIndex = 0;
        }
        newIndex = this.canDecrement() ? this.totalItems-1 : this.state.index-1;
        this.setState({index: newIndex});
    }

    canDecrement = () => {
        return this.state.index-1 < 0;
    }

    canIncrement = () =>{
        return this.state.index+1 >= this.totalItems;
    }

    showPreviousButton(){
        if(this.props.showButtons)
            return <button className={"z-10 px-3 py-2 border-white border-[1px] rounded-full backdrop-blur-sm bg-neutral-400/50"} onClick={this.decrement}>←</button>;
        return null;
    }

    showNextButton(){
        if(this.props.showButtons)
            return <button className={"z-10 px-3 py-2 border-white border-[1px] rounded-full backdrop-blur-sm bg-neutral-400/50"} onClick={this.increment}>→</button>;
        return null;
    }

    showDot() {
        if(this.props.showDots){
            return Array.from({length: this.totalItems}, (_, index) =>{
                return <div key={index}
                            className={" cursor-pointer h-2 w-2 bg-neutral-900 ring-1 ring-white rounded-full transition-all duration-300 " + (this.state.index === index? 'bg-white': '')}
                            onClick={() =>this.setState({index: index})}></div>
            });
        }
        return null;
    }

    renderSlides = () => {
        const { children } = this.props;

        return React.Children.map(children, (child, index) => {
            let className = 'slide';

            if (this.state.index === index) {
                className = 'slide active';
            } else if (
                index === (this.state.index - 1 + React.Children.count(children)) %
                React.Children.count(children)
            ) {
                className = 'slide previous';
            } else if (index === (this.state.index + 1) % React.Children.count(children)) {
                className = 'slide next';
            }

            return (
                <div key={index} className={className}>
                    {child}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="flex flex-col gap-10">
                    <main className={"flex justify-between mx-20"}>
                        {this.showPreviousButton()}
                        <div className="flex justify-center items-center overflow-hidden relative w-screen">{this.renderSlides()}</div>
                        {this.showNextButton()}
                    </main>
                    <div className="dots flex justify-center gap-5 mt-5">
                        {this.showDot()}
                    </div>

                </div>

            </div>
        );
    }
}

export default Carousel;