import React, {Component} from 'react';

export interface ReviewProps {
    commentaire:string;
    name: string;
    star: number;
}
export interface ReviewState {

}

class ReviewCard extends Component<ReviewProps, ReviewState> {

    render() {
        return (
            <section className="w-[20vw] h-[10%] border-2 border-white rounded-lg">
                <p>{this.props.commentaire}</p>
                <p className={"text-end mr-5"}>{this.props.name}</p>
            </section>
        );
    }
}

export default ReviewCard;