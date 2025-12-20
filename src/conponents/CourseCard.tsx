type CourseProps = {
    title: string;
    description: string;
    price: string;
};

const CourseCard = ({ title, description, price }: CourseProps) => {
    return(
        <div className="course-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="price">{price}</span>
            <button>Записаться</button>
        </div>
    );
};

export default CourseCard;
