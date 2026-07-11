export const groups=['全穀雜糧類','豆魚蛋肉類','乳品類','蔬菜類','水果類','油脂與堅果種子類'] as const;export type Group=typeof groups[number];
export const tips:Record<Group,string>={'全穀雜糧類':'全穀雜糧提供活動所需的能量。','豆魚蛋肉類':'豆魚蛋肉幫助身體生長與修補。','乳品類':'乳品是鈣質的重要來源。','蔬菜類':'多樣選蔬菜，餐盤更繽紛。','水果類':'每天適量吃當季水果。','油脂與堅果種子類':'堅果種子適量吃，增添餐點風味。'};
