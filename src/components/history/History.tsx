import React from 'react';
import wantYou from '../../assets/img/wantYou.webp';

const History = () => {
    return (
        <div className="bg-neutral-800">
            <h2 className="text-red-600 text-5xl font-bold text-center pt-10">Notre Histoire</h2>
            <div className="flex flex-col gap-10 m-10 md:grid md:grid-cols-4 md:grid-rows-3">
                <p className="text-neutral-200 text-justify self-center md:row-start-1 md:col-start-2">
                    Rejoignez notre équipe dynamique et participez à l'exploration de bases abandonnées pour récupérer
                    des objets de valeur. Depuis 1968, nous nous spécialisons dans la récupération et la valorisation
                    d'articles oubliés. En tant que membre de notre équipe, vous découvrirez des trésors cachés et
                    contribuerez à une activité passionnante et enrichissante. Vos efforts seront récompensés par une
                    rémunération attractive basée sur la vente de ces trouvailles.</p>
                <img src={wantYou} alt="test" className="md:row-start-1 md:col-start-4"/>

                <p className="text-neutral-200 text-justify self-center md:row-start-2 md:col-start-3">
                    Travailler avec nous, c'est bien plus qu'un emploi. C'est une aventure où chaque mission vous mène
                    dans des lieux chargés d'histoire et de mystères. Vous apprendrez à identifier et récupérer des
                    objets précieux, tout en faisant partie d'une communauté passionnée. Rejoignez notre entreprise pour
                    développer des compétences uniques et participer à une mission de préservation du patrimoine.</p>
                <img src={wantYou} alt="test" className="md:row-start-2 md:col-start-1"/>

                <p className="text-neutral-200 text-justify self-center md:row-start-3 md:col-start-2">
                    Nous valorisons et récompensons le travail de nos employés. Notre modèle de rémunération vous
                    récompense directement en fonction des objets que vous récupérez et de leur vente. Plus vous trouvez
                    des articles rares et précieux, plus vos gains sont importants. Rejoignez-nous dès aujourd'hui et
                    transformez votre passion pour l'exploration en une carrière lucrative et gratifiante. Ensemble,
                    redonnons vie à des trésors oubliés et contribuons à la conservation du patrimoine.</p>
                <img src={wantYou} alt="test" className="md:row-start-3 md:col-start-3 mb-14"/>
            </div>

        </div>
    );
};

export default History;