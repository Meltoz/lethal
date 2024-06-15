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

    render() {
        return (
            <section className="w-80 md:w-[40%] md:h-32 h-44 border-2 border-white/40 rounded-lg">
                <div className={"flex justify-between my-2 mx-2"}>
                    <p className={"font-bold text-xl "}>{this.props.title}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>

                <p className={"mx-3 mb-6"}>{this.props.commentaire}</p>
                <p className={"text-end mr-5"}>{this.props.name}</p>
            </section>
        );
    }
}

export default ReviewCard;