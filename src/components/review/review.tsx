import React, {Component} from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "../carousel/Carousel";
import ReviewCard from "./review-card/review-card";

class Review extends Component {
    private responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }


    render() {
        return (
            <div className="bg-neutral-900">
                <h2 className="text-red-600 text-5xl font-bold text-center">Les avis<br/> de nos collaborateurs
                </h2>
                <div className={"my-10"}>
                    <Carousel
                        showButtons={true}
                        showDots={true}>
                        <ReviewCard commentaire="Hey j'adore cet entreprise" name={"Meltoz"} star={4} />
                        <ReviewCard commentaire="Hey j'adore cet entreprise" name={"Meltoz"} star={4} />
                        <ReviewCard commentaire="Hey j'adore cet entreprise" name={"Meltoz"} star={4} />
                        <ReviewCard commentaire="Hey j'adore cet entreprise" name={"Meltoz"} star={4} />
                        <ReviewCard commentaire="Hey j'adore cet entreprise" name={"Meltoz"} star={4} />
                    </Carousel>
                </div>

            </div>
        );
    }
}

export default Review;