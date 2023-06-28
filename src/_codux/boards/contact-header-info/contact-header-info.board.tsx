import { createBoard } from '@wixc3/react-board';
import { ContactHeaderInfo } from '../../../components/contact-header-info/contact-header-info';

export default createBoard({
    name: 'ContactHeaderInfo',
    Board: () => <ContactHeaderInfo />
});
