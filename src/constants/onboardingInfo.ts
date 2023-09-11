import {ImageSourcePropType} from 'react-native'
import cat_greetings from '../assets/illustrations/cat_greetings.png';
import heroImg_catWithBall from '../assets/illustrations/heroImg_catWithBall.png';
import heroImg_dog from '../assets/illustrations/heroImg_dog.png';

interface onboardingItem {
    title: string,
    description: string,
    image: ImageSourcePropType
}

 const items: onboardingItem[] = [
    {
        title: 'Boas vindas!',
        description: 'Seja a diferença na vida de um animal resgatado através do nosso app de adoção.',
        image: cat_greetings
    },
    {
        title: 'Adoção Simplificada',
        description: 'Simplificando a adoção: nosso app reúne amor e tecnologia para unir você ao seu futuro companheiro peludo. Faça parte dessa jornada!',
        image: heroImg_catWithBall
    },
    {
        title: 'Seu Novo Começo',
        description: 'Seja a mudança que você deseja ver no mundo, adote um pet! Nosso app facilita o processo, conectando você a um novo companheiro peludo.',
        image: heroImg_dog
    },
];

export default items;