import { MaterialCommunityIcons } from "@expo/vector-icons"

interface OptionValue {
    labelName: string,
    labelValue: string,
}

interface racasMap {
    [key: string]: OptionValue[],
}

export const racasMapping: racasMap = {
    "CACHORRO": [
        { labelName: "Labrador Retriever", labelValue: "labrador" },
        { labelName: "Bulldog", labelValue: "bulldog" },
        { labelName: "Golden Retriever", labelValue: "golden" },
        { labelName: "Poodle", labelValue: "poodle" },
        { labelName: "German Shepherd", labelValue: "german-shepherd" },
        { labelName: "Dachshund", labelValue: "dachshund" },
        { labelName: "Beagle", labelValue: "beagle" },
        { labelName: "Boxer", labelValue: "boxer" },
        { labelName: "Pinsher", labelValue: "pinsher" },
        { labelName: "Chihuahua", labelValue: "chihuahua" },
        { labelName: "Outro", labelValue: "outro" }, // Valor "Outro" mantido como o último item
    ],
    "GATO": [
        { labelName: "Siamese", labelValue: "siamese" },
        { labelName: "Maine Coon", labelValue: "maine-coon" },
        { labelName: "Persian", labelValue: "persian" },
        { labelName: "Ragdoll", labelValue: "ragdoll" },
        { labelName: "Scottish Fold", labelValue: "scottish-fold" },
        { labelName: "Sphynx", labelValue: "sphynx" },
        { labelName: "British Shorthair", labelValue: "british-shorthair" },
        { labelName: "Russian Blue", labelValue: "russian-blue" },
        { labelName: "Maine Coon", labelValue: "maine-coon" },
        { labelName: "Outro", labelValue: "outro" }, // Valor "Outro" mantido como o último item
    ],
    "COELHO": [
        { labelName: "Holland Lop", labelValue: "holland-lop" },
        { labelName: "Mini Rex", labelValue: "mini-rex" },
        { labelName: "Flemish Giant", labelValue: "flemish-giant" },
        { labelName: "Lionhead", labelValue: "lionhead" },
        { labelName: "Angora", labelValue: "angora" },
        { labelName: "Netherland Dwarf", labelValue: "netherland-dwarf" },
        { labelName: "Himalayan", labelValue: "himalayan" },
        { labelName: "Dutch", labelValue: "dutch" },
        { labelName: "Mini Lop", labelValue: "mini-lop" },
        { labelName: "Outro", labelValue: "outro" }, // Valor "Outro" mantido como o último item
    ],
};