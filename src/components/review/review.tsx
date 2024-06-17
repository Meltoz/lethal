import React, {Component} from 'react';
import ReviewCard from "./review-card/review-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Review extends Component {
    private reviews = [{
        title:"Une entreprise convivial",
        commentaire: "Je me suis fait plus que des collegues, j'ai maintenant des amis.",
        name:"Maxime M.",
        star: 4
    },{
        title:'Un endroit idéal',
        commentaire: "C'est une entreprise parfaite pour ceux qui ont peur des grandes multinationnales.",
        name:"Romain C.",
        star: 5
    },{
        title:'Un endroit chaleureux',
        commentaire: "Service RH au top, management compréhensif de l'humain.",
        name:"Celeste F.",
        star: 5
    },{
        title:'Best place to work #1',
        commentaire: "De ma vie je n'ai jamais connu d'endroit aussi merveilleux pour travailler.",
        name:"Alexis G.",
        star: 5
    },]


    render() {
        const settings = {
            center: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 20000,
            autoplaySpeed: 1,
            cssEase: "linear",
            arrows: false,
        };

        return (
            <div className="bg-neutral-900">
                <h2 className="text-red-600 text-5xl font-bold text-center">Les avis<br/> de nos collaborateurs
                </h2>
                <div className="slider-container w-full">
                    <Slider {...settings}>
                        {this.reviews.map((review, index) =>
                            <div key={index} className={"flex justify-center"}>
                                <ReviewCard title={review.title} commentaire={review.commentaire} name={review.name} star={review.star} />
                            </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Review;