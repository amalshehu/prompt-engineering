import { getCompletion } from '../setup.js'

const factSheet = `
    OVERVIEW
    - Part of a beautiful family of mid-century inspired office furniture, 
    including filing cabinets, desks, bookcases, meeting tables, and more.
    - Several options of shell color and base finishes.
    - Available with plastic back and front upholstery (SWC-100) 
    or full upholstery (SWC-110) in 10 fabric and 6 leather options.
    - Base finish options are: stainless steel, matte black, 
    gloss white, or chrome.
    - Chair is available with or without armrests.
    - Suitable for home or business settings.
    - Qualified for contract use.

    CONSTRUCTION
    - 5-wheel plastic coated aluminum base.
    - Pneumatic chair adjust for easy raise/lower action.

    DIMENSIONS
    - WIDTH 53 CM | 20.87”
    - DEPTH 51 CM | 20.08”
    - HEIGHT 80 CM | 31.50”
    - SEAT HEIGHT 44 CM | 17.32”
    - SEAT DEPTH 41 CM | 16.14”

    OPTIONS
    - Soft or hard-floor caster options.
    - Two choices of seat foam densities: 
    medium (1.8 lb/ft3) or high (2.8 lb/ft3)
    - Armless or 8 position PU armrests 

    MATERIALS
    SHELL BASE GLIDER
    - Cast Aluminum with modified nylon PA6/PA66 coating.
    - Shell thickness: 10 mm.
    SEAT
    - HD36 foam

    COUNTRY OF ORIGIN
    - Italy
`
const prompt = `
     Your task is to help a marketing team create a 
     description for a retail website of a product based 
     on a technical fact sheet.

     Write a product description based on the information 
     provided in the technical specifications delimited by 
     triple backticks.

     Technical specifications: \`\`\`${factSheet}\`\`\`
`

// const response = await getCompletion(prompt)
// console.log(response)

// Output:
// Introducing our stunning mid-century inspired office chair, the SWC-100/110. 
// Part of a beautiful family of office furniture, this chair is available 
// in several shell color and base finish options to perfectly match your decor. 
// Choose from plastic back and front upholstery or full upholstery in 
// a variety of fabric and leather options. The base finish options include stainless steel,
// matte black, gloss white, or chrome. 

// This chair is designed for both home and business settings and is qualified 
// for contract use. The construction features a 5-wheel plastic coated aluminum 
// base and a pneumatic chair adjust for easy raise/lower action. The dimensions
// of the chair are 53 cm in width, 51 cm in depth, and 80 cm in height, with a 
// seat height of 44 cm and a seat depth of 41 cm. 

// Customize your chair even further with options such as soft or hard-floor caster
// options, two choices of seat foam densities (medium or high), and armless
// or 8 position PU armrests. The materials used in the construction of
// this chair are of the highest quality, with a cast aluminum shell
// with modified nylon PA6/PA66 coating and a seat made of HD36 foam. 

// This chair is made in Italy and is sure to add a touch of elegance and
// sophistication to any workspace. Upgrade your office with the SWC-100/110
// office chair today.


// Issue #1: The text is too long.

const prompt2 = `
     Your task is to help a marketing team create a 
     description for a retail website of a product based 
     on a technical fact sheet.

     Write a product description based on the information 
     provided in the technical specifications delimited by 
     triple backticks.

     Use at most 50 words.
     Technical specifications: \`\`\`${factSheet}\`\`\`
`

const response2 = await getCompletion(prompt2)
console.log(response2)

// Output:
// Introducing the sleek and stylish SWC chair, part of a mid-century inspired office
// furniturcollection. Available in a range of shell colors and base finishes,
// with upholstery options in fabric or leather. The chair features a 5-wheel base
// and pneumatic chair adjust for easy height adjustment. Suitable for home or
// business use and qualified for contract use. Made in Italy.


// Issue #2: Text ficuses in the wrong details.

const prompt3 = `
    Your task is to help a marketing team create a 
    description for a retail website of a product based 
    on a technical fact sheet.

    Write a product description based on the information 
    provided in the technical specifications delimited by 
    triple backticks.

    The description is intended for furniture retailers, 
    so should be technical in nature and focus on the 
    materials the product is constructed from.

    Use at most 50 words.

    Technical specifications: \`\`\`{fact_sheet_chair}\`\`\`
`

const response3 = await getCompletion(prompt3)
console.log(response3)

// Output:
// Introducing our new chair, constructed with high-quality materials for durability
// and comfort. The frame is made of sturdy steel, while the seat and backrest 
// are upholstered with soft, yet durable, polyester fabric. Perfect for any 
// home or office setting.

// Issue #3: Description needs a table of dimensions. 

const prompt4 = `
    Your task is to help a marketing team create a 
    description for a retail website of a product based 
    on a technical fact sheet.

    Write a product description based on the information 
    provided in the technical specifications delimited by 
    triple backticks.

    The description is intended for furniture retailers, 
    so should be technical in nature and focus on the 
    materials the product is constructed from.

    At the end of the description, include every 7-character 
    Product ID in the technical specification.

    After the description, include a table that gives the 
    product's dimensions. The table should have two columns.
    In the first column include the name of the dimension. 
    In the second column include the measurements in inches only.

    Give the table the title 'Product Dimensions'.

    Format everything as HTML that can be used in a website. 
    Place the description in a <div> element.

    Technical specifications: \`\`\`{fact_sheet_chair}\`\`\`
`

const response4 = await getCompletion(prompt4)
console.log(response4)

// Output:
{/* <table>
<caption>Product Dimensions</caption>
        <tr>
        <th>Width</th>
        <td>22 inches</td>
        </tr>
        <tr>
        <th>Depth</th>
        <td>24 inches</td>
        </tr>
        <tr>
        <th>Height</th>
        <td>32 inches</td>
        </tr>
        <tr>
        <th>Seat Height</th>
        <td>18 inches</td>
        </tr>
    </table>
</div>

Product IDs: fact001 */}
