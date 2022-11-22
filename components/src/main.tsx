import register from 'preact-custom-element';
import { RNButton } from './RNButton'

interface Props {
  text: string
}

const RNButtonMapper = ({ text }: Props) => <RNButton text={text} onPress={() => console.log('MyButton')}/>
register(RNButtonMapper, 'rn-button', ['text']);
