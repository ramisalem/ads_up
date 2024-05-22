import { Categories } from '@/constants/types';
import { useAppSelector } from '@/hooks/hooks';
import { selectAllCats, selectCatById } from '@/redux/slices/categorysSlice';

export const CategoryDetail = ({ id }: { id: string }) => {
    const cate = useAppSelector(selectAllCats);
    ///TODO find other way to do this
    const catName = cate.map((cat) => {
        let c: Omit<Categories, 'subCategories'>[] = cat?.subCategories.filter(
            (item) => item.uuid === id
        );

        if (c[0]?.uuid !== undefined) {
            return c[0].nameEn;
        }
    });

    return <span>{catName}</span>;
};
