import { cardItems } from '../../stores/card-items';

import { CardContainer } from './card.styles';
import { CardItemComponent } from '../card-item/card-item.component';

export const CardComponent = () => {
  return (
    <CardContainer>
      {/*Cards*/}
      {cardItems.map(item => (
        <CardItemComponent
          key={item.id}
          cardClass={item.cardClass}
          img={item.img}
          header={item.header}
          paragraph={item.paragraph}
          twClass={item.twClass}
          text={item.text}
        />
      ))}
    </CardContainer>
  );
};
