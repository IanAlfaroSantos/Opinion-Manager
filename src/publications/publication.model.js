import { Schema, model } from "mongoose";

const PublicationSchema = Schema({
    title: {
        type: String,
        required: [true, "El título de la publicación es obligatorio"]
    },
    content: {
        type: String,
        required: [true, "El contenido de la publicación es obligatorio"]
    },
    DateAndTime: {
        type: String,
        default: () => {
            const current = new Date();
            return current.toISOString().slice(0, 16).replace("T", " ");
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "El usuario de la publicacion es obligatorio"]
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: "Categorie",
        required: [true, "La categoria de la publicacion es obligatoria"]
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Publication", PublicationSchema);