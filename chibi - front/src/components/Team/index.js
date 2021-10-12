/* eslint-disable jsx-a11y/alt-text */
import imgClaudie from '../../assets/team/imgClaudie.jpg'
import './team.scss';

const Team = () => (
    <div className='team'>
        <h2 className="team__title">Team Chibi Café</h2>
        <div className="team__container">
            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Claudie</p>
                <p className="team__container__card__description">Lead Dev Front</p>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Leopold</p>
                <p className="team__container__card__description">Lead Dev Back</p>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Mathieu</p>
                <p className="team__container__card__description">Scrum Master & Dev Front</p>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Florentin</p>
                <p className="team__container__card__description">Git Master & Dev Back</p>
            </div>

            <div className="team__container__card">
                <img
                className="team__container__card__img"
                src={imgClaudie}
                />
                <p className="team__container__card__name">Richard</p>
                <p className="team__container__card__description">Product Owner & Dev Front</p>
            </div>
        </div>
    </div>
);

export default Team;