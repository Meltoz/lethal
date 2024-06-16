import React, {Component} from 'react';

export interface ReviewProps {
    title: string;
    commentaire:string;
    name: string;
    star: number;
}
export interface ReviewState {

}

class ReviewCard extends Component<ReviewProps, ReviewState> {
    calcStar() {
        let star = '';
        for(let i= 0; i<this.props.star; i++){
            star += '⭐'
        }
        return star;
    }
    render() {
        return (
            <div className={"relative md:h-52 h-96"}>
                <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-neutral-500 border-2 rounded-lg p-2">
                    <div className={"flex justify-between my-2 ml-2 mr-5"}>
                        <p className={"font-bold text-xl "}>{this.props.title}</p>
                        <p>{this.calcStar()}</p>
                    </div>
                    <p className={"ml-2 mr-5 mb-6 text-justify"}>{this.props.commentaire}</p>
                    <p className={"text-end mr-5"}>{this.props.name}</p>
                </section>
            </div>
        );
    }
}

export default ReviewCard;