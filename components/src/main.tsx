import register from 'preact-custom-element';
import { RNButton } from './RNButton'

interface Props {
  text: string
}

const Greeting = ({ text }: Props) => <RNButton text={text} onPress={() => console.log('MyButton')}/>
register(Greeting, 'x-greeting', ['text']);
