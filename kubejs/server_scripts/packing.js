// Repurposes the TR (t)Rolling Machine as a Packer, and TR Assembling Machine as an Unpacker.

function pack9(event, input, output) {
    event.custom({
        type: "techreborn:rolling_machine",
        shaped: {
            pattern: ["III", "III", "III"],
            key: {
                I: {
                    item: input,
                },
            },
            result: {
                item: output,
            },
        },
        power: 5,
        time: 250,
    });
}

function pack4(event, input, output) {
    event.custom({
        type: "techreborn:rolling_machine",
        shaped: {
            pattern: ["II ", "II ", "   "],
            key: {
                I: {
                    item: input,
                },
            },
            result: {
                item: output,
            },
        },
        power: 5,
        time: 250,
    });
}

function unpack(event, input, output, amount) {
    event.custom({
        type: "techreborn:assembling_machine",
        power: 5,
        time: 250,
        ingredients: [
            {
                item: input,
            },
        ],
        results: [
            {
                item: output,
                count: amount,
            },
        ],
    });
}

/*
    Required keys:
    - mod: A mod that the material is coming from.
    - type: Type of the material.
    Optional keys:
    - smallRecipe: Tells that the recipe is 2x2 instead of 3x3,
    - notUnpackable: Do not create unpacking recipes for this material,
    - hasNugget: If the material has a nugget,
    - nuggetMod: If a nugget comes from a different mod, usually the case with Minecraft materials,
    - append: What to append to the "base" material,
*/
const PACK_MATERIALS = [
    {
        mod: "minecraft",
        type: "coal",
    },
    {
        mod: "minecraft",
        type: "raw_iron",
    },
    {
        mod: "minecraft",
        type: "raw_copper",
    },
    {
        mod: "minecraft",
        type: "raw_gold",
    },
    {
        mod: "minecraft",
        type: "amethyst",
        smallRecipe: true,
        notUnpackable: true,
    },
    {
        mod: "minecraft",
        type: "iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "minecraft",
        type: "copper",
        append: "_ingot",
        hasNugget: true,
        nuggetMod: "create",
    },
    {
        mod: "minecraft",
        type: "gold",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "minecraft",
        type: "diamond",
        hasNugget: true,
        nuggetMod: "techreborn",
    },
    {
        mod: "minecraft",
        type: "netherite",
        append: "_ingot",
        hasNugget: true,
        nuggetMod: "tconstruct",
    },
    {
        mod: "minecraft",
        type: "lapis",
        append: "_lazuli",
    },
    {
        mod: "minecraft",
        type: "emerald",
        hasNugget: true,
        nuggetMod: "techreborn",
    },
    {
        mod: "minecraft",
        type: "quartz",
        hasNugget: true,
        smallRecipe: true,
        notUnpackable: true,
    },
    {
        mod: "minecraft",
        type: "redstone",
    },
    {
        mod: "create",
        type: "raw_zinc",
    },
    {
        mod: "create",
        type: "zinc",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "create",
        type: "andesite_alloy",
    },
    {
        mod: "create",
        type: "brass",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "create",
        type: "raw_zinc",
    },
    {
        mod: "createbigcannons",
        type: "cast_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "createbigcannons",
        type: "nethersteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "createdeco",
        type: "cast_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        // All Tech Reborn blocks will have "_storage" appended before "_block".
        mod: "techreborn",
        type: "advanced_alloy",
        append: "_ingot",
    },
    {
        mod: "techreborn",
        type: "electrum",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "hot_tungstensteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "invar",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "lead",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "peridot",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "raw_iridium",
    },
    {
        mod: "techreborn",
        type: "raw_lead",
    },
    {
        mod: "techreborn",
        type: "raw_silver",
    },
    {
        mod: "techreborn",
        type: "raw_tin",
    },
    {
        mod: "techreborn",
        type: "raw_tungsten",
    },
    {
        mod: "techreborn",
        type: "red_garnet",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "ruby",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "sapphire",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "silver",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "tin",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "yellow_garnet",
        append: "_gem",
    },
    {
        mod: "tconstruct",
        type: "cobalt",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "slimesteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "amethyst_bronze",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "rose_gold",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "pig_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "queens_slime",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "manyullyn",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "hepatizon",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "raw_cobalt",
    },
    {
        mod: "yttr",
        type: "yttrium",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "yttr",
        type: "ultrapure_carbon",
    },
    {
        mod: "yttr",
        type: "compressed_ultrapure_carbon",
    },
    {
        mod: "yttr",
        type: "brookite",
    },
    {
        mod: "yttr",
        type: "cuprosteel",
        append: "_ingot",
    },
];
onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:assembling_machine" });
    event.remove({ type: "techreborn:rolling_machine" });

    PACK_MATERIALS.forEach((material) => {
        let ingotID = `${material.mod}:${material.type}${material.append ?? ""}`;
        let blockID = `${material.mod}:${material.type}${material.mod == "techreborn" ? "_storage" : ""}_block`; // Tech Reborn moment
        let nuggetID = `${material.nuggetMod ?? material.mod}:${material.type}_nugget`;
        if (material.smallRecipe) {
            pack4(event, ingotID, blockID);
            if (!material.notUnpackable) {
                unpack(event, blockID, ingotID, 4);
            }
        } else {
            pack9(event, ingotID, blockID);
            if (!material.notUnpackable) {
                unpack(event, blockID, ingotID, 9);
            }
            if (material.hasNugget) {
                pack9(event, nuggetID, ingotID);
                if (!material.notUnpackable) {
                    unpack(event, ingotID, nuggetID, 9);
                }
            }
        }
    });
});
