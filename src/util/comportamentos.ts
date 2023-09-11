import { MaterialCommunityIcons } from "@expo/vector-icons"

interface ComportamentoMap {
    [key: string]: React.ComponentProps<typeof MaterialCommunityIcons>['name']
}

export const comportamentoIconMap: ComportamentoMap = {
    "Bom com crianças": "teddy-bear",
    "Não morde": "alert",
    "Amoroso": "heart",
    "Bom com outros animais": "paw",
    "Gosta de passear": "dog-side",
    "Inteligente": "brain",
}