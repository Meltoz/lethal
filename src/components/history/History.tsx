import React from 'react';
import wantYou from '../../assets/img/wantYou.webp';

const History = () => {
    return (
        <div className="bg-neutral-800">
            <h2 className="text-red-600 text-5xl font-bold text-center pt-10">Notre Histoire</h2>
            <div className="flex flex-col gap-10 m-10 md:grid md:grid-cols-4 md:grid-rows-3">
                <p className="text-neutral-200 text-justify self-center md:row-start-1 md:col-start-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, blanditiis consequuntur
                    culpa cupiditate dolorem eveniet fuga fugit, impedit iusto laboriosam laudantium magnam molestiae
                    quis sapiente sed sequi veniam, veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus architecto commodi dolores doloribus et in inventore ipsa praesentium quae repudiandae saepe, suscipit. Aliquid, autem est ipsam officia rerum voluptas!</p>
                <img src={wantYou} alt="test" className="md:row-start-1 md:col-start-4"/>

                <p className="text-neutral-200 text-justify self-center md:row-start-2 md:col-start-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, blanditiis consequuntur
                    culpa cupiditate dolorem eveniet fuga fugit, impedit iusto laboriosam veritatis!</p>
                <img src={wantYou} alt="test" className="md:row-start-2 md:col-start-1"/>

                <p className="text-neutral-200 text-justify self-center md:row-start-3 md:col-start-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, blanditiis consequuntur
                    culpa cupiditate dolorem eveniet fuga fugit, impedit iusto laboriosam laudantium magnam molestiae
                    quis sapiente sed sequi veniam, veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi, debitis dolorem eius est eum expedita facere iste nemo obcaecati, o t veniam veritatis vero voluptate?</p>
                <img src={wantYou} alt="test" className="md:row-start-3 md:col-start-3 mb-14"/>
            </div>

        </div>
    );
};

export default History;