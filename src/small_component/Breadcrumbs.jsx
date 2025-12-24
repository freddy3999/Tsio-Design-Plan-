

export default function Breadcrumbs({ word, word2 }) {
    return (
        <div className="mb-[1vh] text-center">
            <p className="heading-bold lg:heading-bold-web">
                {word}{word2 ? `/${word2}` : ''}
            </p>
        </div>
    );
}
