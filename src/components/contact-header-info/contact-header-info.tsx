import classNames from 'classnames';
import styles from './contact-header-info.module.scss';

export interface ContactHeaderInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ContactHeaderInfo = ({ className }: ContactHeaderInfoProps) => {
    return <div className={classNames(className)}>ContactHeaderInfo</div>;
};
