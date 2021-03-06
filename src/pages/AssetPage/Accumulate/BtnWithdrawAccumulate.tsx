import React, { FC, useState } from 'react';
import Modal from 'components/Modal';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'react-alert';
import { useSetLoading } from 'state/global/hooks';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormInput from 'components/FormInput';
import FormTextArea from 'components/FormTextArea';
import CommonButton from 'components/CommonButton/Index';
import { formatCurrency } from 'utils';
import InputWithLabel from 'components/InputWithLabel';
import { IAccumulateItem } from '.';

interface IProps {
  title: string;
  source: IAccumulateItem;
}

interface IWithdrawAccumulate {
  money: number | string;
  otherMoney?: number | string;
  sourceId: string;
  actionAt: string;
  description?: string;
}

const BtnWithdrawAccumulate: FC<IProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const reactAlert = useAlert();
  const setLoading = useSetLoading();

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const validationSchema: Yup.SchemaOf<IWithdrawAccumulate> = Yup.object().shape({
    money: Yup.number()
      .min(0, t('asset.transferMoneyInvalid'))
      .required(t('asset.transferMoneyIsRequired')),
    otherMoney: Yup.number().min(0, t('asset.transferOtherMoneyInvalid')),
    sourceId: Yup.string().required(),
    actionAt: Yup.string().required(),
    description: Yup.string()
      .min(0, t('asset.invalidBalance'))
      .max(1000000000000000, t('asset.invalidBalcane')),
  });

  const onSubmit = async (values: IWithdrawAccumulate) => {
    setLoading(true);

    setTimeout(() => {
      handleCloseModal();
      setLoading(false);
      reactAlert.success('Chuyển khoản thành công.');
    }, 1000);
  };

  const defaulDescription = 'Rút tiền ra khỏi tích lũy "{A}"';

  const formik = useFormik<IWithdrawAccumulate>({
    initialValues: {
      money: '',
      actionAt: '',
      sourceId: '',
      description: defaulDescription.replace('{A}', props.source.name),
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div
        className="h-[50px] flex items-center justify-center text-2xl cursor-pointer border-b border-b-[silver]"
        onClick={handleOpenModal}
      >
        {props.title}
      </div>
      <Modal
        isVisible={modalVisible}
        subTitle={props.source.name}
        title={'Rút tiền ra khỏi tích lũy'}
        onClose={handleCloseModal}
      >
        <form onSubmit={formik.handleSubmit} className="px-[10px]">
          <FormInput
            type="number"
            name="money"
            id="money"
            placeholder="Số tiền"
            onChange={formik.handleChange}
            value={formik.values.money}
            onBlur={formik.handleBlur}
            touched={formik.touched.money}
            error={formik.errors.money}
          />

          <InputWithLabel
            label="Tài khoản đích"
            type="text"
            name="sourceId"
            id="sourceId"
            onChange={formik.handleChange}
            value={formik.values.sourceId}
            onBlur={formik.handleBlur}
            touched={formik.touched.sourceId}
            error={formik.errors.sourceId}
          />

          <InputWithLabel
            label="Ngày thực hiện"
            type="datetime-local"
            name="actionAt"
            id="actionAt"
            placeholder="Ngày thực hiện"
            onChange={formik.handleChange}
            value={formik.values.actionAt}
            onBlur={formik.handleBlur}
            touched={formik.touched.actionAt}
            error={formik.errors.actionAt}
          />
          <InputWithLabel
            type="number"
            name="otherMoney"
            id="otherMoney"
            label="Chi phí phát sinh(nếu có)"
            onChange={formik.handleChange}
            value={formik.values.otherMoney}
            onBlur={formik.handleBlur}
            touched={formik.touched.otherMoney}
            error={formik.errors.otherMoney}
          />

          <FormTextArea
            label={'Chú thích'}
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            touched={formik.touched.description}
            error={formik.errors.description}
          />

          <div className="h-[80px] flex items-center ">
            <CommonButton type="submit" className="font-bold text-xl">
              Rút
            </CommonButton>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BtnWithdrawAccumulate;
