import React from "react";
import  ReactDOM  from "react";
export default function App() {
    const [colors, setColors] = useState(colorData); return (
        <ColorList
            colors={colors}
            onRateColor={(id, rating) => {
                const newColors = colors.map(color =>
                    color.id === id ? { ...color, rating } : color
                );
                setColors(newColors);
            }}
            onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id); setColors(newColors);
            }}
        />
    );
}




export default function ColorList({ colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    if (!colors.length) return
    <div>No Colors Listed. (Add a Color)</div>;
    return
    (
        <div className="color-list">
            {
                colors.map(color =>
                (
                    <Color
                        key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                ))
                }

    </div>
    );
    }
export default function Color({ id,
    title,
    color,
    rating,
    onRemove = f => f,
    onRate = f => f
}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}
            />
        </section>
    );
}
export default function StarRating({ totalStars = 5,
    selectedStars = 0,
    onRate = f => f
}) {
    return (<>
        {createArray(totalStars).map((n, i) => (
            <Star
                key={i}
                selected={selectedStars > i}
                onSelect={() => onRate(i + 1)}
            />
        ))}
    </>);
}
