import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import HealthCare from '../../../assets/Icons/care_doctor.svg?react';
import Reports from '../../../assets/Icons/daily_reports.svg?react';
import ClassWorks from '../../../assets/Icons/remote_classworks.svg?react';

const FeatureIcon = ({ type, className }) => {
    const classes = twMerge(
        'bg-darkBlue absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg',
        className,
    );

    const icons = {
        healthCare: (
            <div className={classes}>
                <HealthCare className='w-full' />
            </div>
        ),
        reports: (
            <div className={classes}>
                <Reports className='w-full' />
            </div>
        ),
        classWorks: (
            <div className={classes}>
                <ClassWorks className='w-full' />
            </div>
        ),
    };

    return icons[type];
};

FeatureIcon.propTypes = {
    type: propTypes.oneOf(['healthCare', 'reports', 'classWorks']),
    className: propTypes.string,
};

export default FeatureIcon;
